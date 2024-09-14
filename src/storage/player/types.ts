import { IPlayerItems, IPlayerStats } from '../../store/reducers/types'

export type PlayerDataStorage = IPlayerStats & IPlayerItems

export type PlayerDataStorageKeys = keyof IPlayerStats | keyof IPlayerItems
