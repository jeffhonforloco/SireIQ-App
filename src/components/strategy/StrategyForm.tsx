import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { strategySchema } from '../../utils/validation/schemas';
import { Button } from '../common/Button';
import { Check, X } from 'lucide-react';

interface StrategyFormProps {
  onSubmit: (data: any) => void;
  onCancel: () => void;
  initialData?: any;
}

export function StrategyForm({ onSubmit, onCancel, initialData }: StrategyFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(strategySchema),
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register('title')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message as string}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description')}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message as string}</p>
        )}
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" icon={X} onClick={onCancel}>Cancel</Button>
        <Button type="submit" icon={Check}>Save</Button>
      </div>
    </form>
  );
}