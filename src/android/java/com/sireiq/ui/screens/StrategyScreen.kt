package com.sireiq.ui.screens

import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.sireiq.data.Strategy
import com.sireiq.viewmodels.StrategyViewModel

@Composable
fun StrategyScreen(viewModel: StrategyViewModel) {
    var showAddDialog by remember { mutableStateOf(false) }
    val strategies by viewModel.strategies.collectAsState()
    
    Scaffold(
        topBar = {
            SmallTopAppBar(
                title = { Text("Strategy Planner") },
                actions = {
                    IconButton(onClick = { showAddDialog = true }) {
                        Icon(Icons.Default.Add, contentDescription = "Add Strategy")
                    }
                }
            )
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
                .padding(16.dp),
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            items(strategies) { strategy ->
                StrategyCard(strategy = strategy)
            }
        }
        
        if (showAddDialog) {
            AddStrategyDialog(
                onDismiss = { showAddDialog = false },
                onConfirm = { title ->
                    viewModel.createStrategy(title)
                    showAddDialog = false
                }
            )
        }
    }
}