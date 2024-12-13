package com.sireiq.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.sireiq.data.TrainingSession
import com.sireiq.viewmodels.TrainingViewModel

@Composable
fun TrainingScreen(viewModel: TrainingViewModel) {
    val trainingSessions by viewModel.trainingSessions.collectAsState()
    
    Scaffold(
        topBar = {
            SmallTopAppBar(
                title = { Text("Training Hub") }
            )
        }
    ) { padding ->
        LazyVerticalGrid(
            columns = GridCells.Fixed(2),
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(16.dp),
            horizontalArrangement = Arrangement.spacedBy(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(trainingSessions) { session ->
                TrainingCard(session = session)
            }
        }
    }
}