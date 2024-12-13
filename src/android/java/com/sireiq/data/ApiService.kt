package com.sireiq.data

import retrofit2.http.*

interface ApiService {
    @GET("strategies")
    suspend fun getStrategies(): List<Strategy>
    
    @POST("strategies")
    suspend fun createStrategy(@Body strategy: Strategy): Strategy
    
    @GET("training")
    suspend fun getTrainingSessions(): List<TrainingSession>
    
    @GET("analysis")
    suspend fun getAnalysis(): List<Analysis>
}