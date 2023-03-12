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
	const stage = useSelector((state: RootState) => selectStage(state))
	const fetchMonsterInterval = useSelector((state: RootState) => selectMonsterInterval(state))

	const stageMultyplierLoot = Number((stage / 100 + 1)?.toFixed(2))

	let stageMultyplierStats = 1

	if (stage >= 10 && stage < 20) {
		stageMultyplierStats = 2
	} else if (stage >= 20 && stage < 30) {
		stageMultyplierStats = 3
	} else if (stage >= 30 && stage < 40) {
		stageMultyplierStats = 4
	} else if (stage >= 40 && stage < 50) {
		stageMultyplierStats = 5
	}

	return {
		startMonsterAttack,
		showMonsterLoot,
		loadingScene,
		scene,
		stage,
		fetchMonsterInterval,
		stageMultyplierLoot,
		stageMultyplierStats,
	}
}

export default useActions
