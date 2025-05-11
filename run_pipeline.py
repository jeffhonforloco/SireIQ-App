import os
import json
import requests
from transformers import AutoModelForCausalLM, AutoTokenizer, Trainer, TrainingArguments, TextDataset, DataCollatorForLanguageModeling
from dotenv import load_dotenv

def load_prompts(path):
    with open(path, 'r') as f:
        return json.load(f)

def query_deepseek(prompt):
    url = 'https://api.deepseek.com/v1/completions'
    headers = {'Authorization': f"Bearer {os.getenv('DEEPSEEK_API_KEY')}"}
    data = {'model': 'gpt-4o', 'prompt': prompt}
    resp = requests.post(url, headers=headers, json=data).json()
    return resp['choices'][0]['text']

def query_huggingface(prompt):
    from huggingface_hub import InferenceClient
    client = InferenceClient(token=os.getenv('HF_API_TOKEN'))
    result = client.text_generation(model='gpt2', inputs=prompt)
    return result[0]['generated_text']

def query_local(prompt):
    resp = requests.post(os.getenv('LOCAL_LLM_ENDPOINT'), json={'prompt': prompt})
    return resp.json()['text']

def main():
    load_dotenv()
    teacher = os.getenv('TEACHER_PROVIDER')
    prompts = load_prompts('prompts/prompts.json')
    outputs = []
    for item in prompts:
        text = item['prompt']
        if teacher == 'deepseek':
            out = query_deepseek(text)
        elif teacher == 'huggingface':
            out = query_huggingface(text)
        else:
            out = query_local(text)
        outputs.append({'prompt': text, 'response': out})

    os.makedirs('output', exist_ok=True)
    with open('output/distilled_data.json', 'w') as f:
        json.dump(outputs, f, indent=2)

    # Prepare dataset
    with open('output/distilled_data.json') as f:
        data = json.load(f)
    with open('train.txt', 'w') as f:
        for entry in data:
            f.write(entry['prompt'] + " " + entry['response'] + "\n")

    model_name = os.getenv('STUDENT_MODEL')
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForCausalLM.from_pretrained(model_name)

    train_dataset = TextDataset(
        tokenizer=tokenizer,
        file_path="train.txt",
        block_size=128
    )
    data_collator = DataCollatorForLanguageModeling(
        tokenizer=tokenizer, mlm=False
    )

    training_args = TrainingArguments(
        output_dir="models",
        overwrite_output_dir=True,
        num_train_epochs=1,
        per_device_train_batch_size=4,
        save_steps=500,
        save_total_limit=2,
        logging_dir='logs'
    )

    trainer = Trainer(
        model=model,
        args=training_args,
        data_collator=data_collator,
        train_dataset=train_dataset
    )
    trainer.train()
    trainer.save_model('models')

if __name__ == "__main__":
    main()
