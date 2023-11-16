import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";

const initialState = {
    cars: [],
    trigger: null,
    carForUpdate: null,
    isLoading:null,
    errors:null
}

const getAll =createAsyncThunk(
    'carSlice/getAll',
    async (_,thunkAPI)=>{
        try {
            const {data} = await carService.getAll()
            return data
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create =createAsyncThunk(
    'carSlice/create',
    async ({car},thunkAPI)=>{
        try {
            await carService.create(car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car},thunkAPI)=>{
        try {
            await carService.updateById(id,car)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id},thunkAPI)=>{
        try {
            await carService.deleteById(id)
        }catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        }
    },extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled,(state,action)=>{
            state.cars = action.payload
        })
            .addCase(updateById.fulfilled,(state,action)=>{
            state.carForUpdate = action.payload
        })
            .addMatcher(isFulfilled(getAll,updateById,deleteById,create),state=>{
                state.isLoading = false
                state.errors = null
            })
            .addMatcher(isRejected(getAll,updateById,deleteById,create),(state,action)=>{
                state.isLoading = false
                state.errors = action.payload
            })
            .addMatcher(isPending(getAll,updateById,deleteById,create),state=>{
                state.isLoading = true
            })
            .addMatcher(isFulfilled(updateById,deleteById,create),state=>{
                state.trigger = !state.trigger
            })
    }
})

const {reducer: carReducer, actions} = carSlice;

const carActions = {
    ...actions,
    getAll,
    updateById,
    create,
    deleteById
}

export {
    carReducer,
    carActions
}