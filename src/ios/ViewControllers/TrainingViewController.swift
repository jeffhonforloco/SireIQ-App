import UIKit

class TrainingViewController: UIViewController {
    private let collectionView: UICollectionView = {
        let layout = UICollectionViewFlowLayout()
        layout.scrollDirection = .vertical
        layout.minimumLineSpacing = 16
        layout.minimumInteritemSpacing = 16
        layout.sectionInset = UIEdgeInsets(top: 16, left: 16, bottom: 16, right: 16)
        
        let collection = UICollectionView(frame: .zero, collectionViewLayout: layout)
        collection.backgroundColor = .clear
        collection.register(TrainingCell.self, forCellWithReuseIdentifier: "TrainingCell")
        collection.translatesAutoresizingMaskIntoConstraints = false
        return collection
    }()
    
    private var trainingSessions: [TrainingSession] = []
    private let networkManager = NetworkManager.shared
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        fetchTrainingSessions()
    }
    
    private func setupUI() {
        title = "Training Hub"
        view.backgroundColor = UIColor(named: "BackgroundColor")
        
        view.addSubview(collectionView)
        NSLayoutConstraint.activate([
            collectionView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor),
            collectionView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            collectionView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            collectionView.bottomAnchor.constraint(equalTo: view.bottomAnchor)
        ])
        
        collectionView.delegate = self
        collectionView.dataSource = self
    }
    
    private func fetchTrainingSessions() {
        networkManager.fetch(endpoint: .training) { [weak self] (result: Result<[TrainingSession], Error>) in
            switch result {
            case .success(let sessions):
                self?.trainingSessions = sessions
                DispatchQueue.main.async {
                    self?.collectionView.reloadData()
                }
            case .failure(let error):
                print("Error fetching training sessions: \(error)")
            }
        }
    }
}