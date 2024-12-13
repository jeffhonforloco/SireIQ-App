import UIKit

class MainTabBarController: UITabBarController {
    override func viewDidLoad() {
        super.viewDidLoad()
        setupViewControllers()
        setupAppearance()
    }
    
    private func setupViewControllers() {
        let dashboardVC = UINavigationController(rootViewController: DashboardViewController())
        dashboardVC.tabBarItem = UITabBarItem(title: "Dashboard", image: UIImage(systemName: "chart.bar"), tag: 0)
        
        let strategyVC = UINavigationController(rootViewController: StrategyViewController())
        strategyVC.tabBarItem = UITabBarItem(title: "Strategy", image: UIImage(systemName: "brain"), tag: 1)
        
        let trainingVC = UINavigationController(rootViewController: TrainingViewController())
        trainingVC.tabBarItem = UITabBarItem(title: "Training", image: UIImage(systemName: "lightbulb"), tag: 2)
        
        let profileVC = UINavigationController(rootViewController: ProfileViewController())
        profileVC.tabBarItem = UITabBarItem(title: "Profile", image: UIImage(systemName: "person.circle"), tag: 3)
        
        viewControllers = [dashboardVC, strategyVC, trainingVC, profileVC]
    }
    
    private func setupAppearance() {
        tabBar.backgroundColor = UIColor(named: "TabBarBackground")
        tabBar.tintColor = UIColor(named: "AccentColor")
        tabBar.unselectedItemTintColor = .gray
    }
}