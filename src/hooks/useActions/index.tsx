import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import {
	selectCenario,
	selectLoadingScene,
	selectMonsterInterval,
	selectShowMonsterLoot,
	selectStage,
	selectStartMonsterAttack,
} from '../../store/selectors/actions'

const useActions = () => {
	const startMonsterAttack = useSelector((state: RootState) => selectStartMonsterAttack(state))
	const showMonsterLoot = useSelector((state: RootState) => selectShowMonsterLoot(state))
	const loadingScene = useSelector((state: RootState) => selectLoadingScene(state))
	const scene = useSelector((state: RootState) => selectCenario(state))
	// const stage = 1000
	const stage = useSelector((state: RootState) => selectStage(state))
	const fetchMonsterInterval = useSelector((state: RootState) => selectMonsterInterval(state))
	const isfetchingMonster = fetchMonsterInterval > 0

	const stageMultyplierLoot = Number((stage / 100 + 1)?.toFixed(2))

	const stageDigits = `${stage}`.length

	const stageMultyplierStats = stage <= 10 ? 1 : Math.floor((stage - 1) / 10) + 1

	return {
		startMonsterAttack,
		showMonsterLoot,
		loadingScene,
		scene,
		stage,
		fetchMonsterInterval,
		stageMultyplierLoot,
		stageMultyplierStats,
		isfetchingMonster,
	}
}

export default useActions
