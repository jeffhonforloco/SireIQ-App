package com.sireiq

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material3.MaterialTheme
import com.google.firebase.FirebaseApp
import com.sireiq.ui.theme.SireIQTheme
import com.sireiq.navigation.AppNavigation

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        FirebaseApp.initializeApp(this)
        
        setContent {
            SireIQTheme {
                AppNavigation()
            }
        }
    }
}