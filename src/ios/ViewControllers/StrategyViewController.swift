import UIKit

class StrategyViewController: UIViewController {
    private let tableView: UITableView = {
        let table = UITableView()
        table.backgroundColor = .clear
        table.separatorStyle = .none
        table.register(StrategyCell.self, forCellReuseIdentifier: "StrategyCell")
        table.translatesAutoresizingMaskIntoConstraints = false
        return table
    }()
    
    private var strategies: [Strategy] = []
    private let networkManager = NetworkManager.shared
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        fetchStrategies()
    }
    
    private func setupUI() {
        title = "Strategy Planner"
        view.backgroundColor = UIColor(named: "BackgroundColor")
        
        navigationItem.rightBarButtonItem = UIBarButtonItem(
            barButtonSystemItem: .add,
            target: self,
            action: #selector(addStrategy)
        )
        
        view.addSubview(tableView)
        NSLayoutConstraint.activate([
            tableView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            tableView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            tableView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            tableView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        tableView.delegate = self
        tableView.dataSource = self
    }
    
    private func fetchStrategies() {
        networkManager.fetch(endpoint: .strategies) { [weak self] (result: Result<[Strategy], Error>) in
            switch result {
            case .success(let strategies):
                self?.strategies = strategies
                DispatchQueue.main.async {
                    self?.tableView.reloadData()
                }
            case .failure(let error):
                print("Error fetching strategies: \(error)")
            }
        }
    }
    
    @objc private func addStrategy() {
        let alert = UIAlertController(title: "New Strategy", message: nil, preferredStyle: .alert)
        alert.addTextField { textField in
            textField.placeholder = "Strategy Title"
        }
        
        let createAction = UIAlertAction(title: "Create", style: .default) { [weak self] _ in
            guard let title = alert.textFields?.first?.text else { return }
            self?.createStrategy(title: title)
        }
        
        alert.addAction(createAction)
        alert.addAction(UIAlertAction(title: "Cancel", style: .cancel))
        
        present(alert, animated: true)
    }
    
    private func createStrategy(title: String) {
        let strategy = Strategy(title: title, description: "", status: .draft)
        networkManager.create(endpoint: .strategies, body: strategy) { [weak self] (result: Result<Strategy, Error>) in
            switch result {
            case .success(let strategy):
                self?.strategies.append(strategy)
                DispatchQueue.main.async {
                    self?.tableView.reloadData()
                }
            case .failure(let error):
                print("Error creating strategy: \(error)")
            }
        }
    }
}