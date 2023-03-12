import { Fragment, useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { setPlayerAttacking, setPlayerCanAttack } from '../../store/reducers/player'
import { selectPlayerCanAttack, selectPlayerIsAttacking } from '../../store/selectors/player'
import * as S from './styles'
const randomNumber = Math.floor(Math.random() * 3) + 1
const cursor = `images/swords/${randomNumber}.webp`

export const Cursor = () => {
	const dispatch = useDispatch()

	const cursorRef = useRef<any>(null)
	const attackRef = useRef<any>(null)

	const isAttacking = useSelector((state: RootState) => selectPlayerIsAttacking(state))
	const canAttack = useSelector((state: RootState) => selectPlayerCanAttack(state))

	const attack = useCallback(
		(e: any) => {
			dispatch(setPlayerCanAttack(false))

			if (canAttack && cursor !== 'images/swords/0.webp') {
				const posX = e.pageX - 50
				const posY = e.pageY + 35
				cursorRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posX + 'px;')
				dispatch(setPlayerAttacking(true))
			}

			setTimeout(() => {
				const posY = e.pageY - 6
				const posX = e.pageX - 50

				if (cursorRef?.current == null) return

				cursorRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posX + 'px;')
				dispatch(setPlayerAttacking(false))
			}, 200)

			setTimeout(() => {
				dispatch(setPlayerCanAttack(true))
			}, 2000)
		},
		[canAttack, dispatch]
	)

	useEffect(() => {
		if (!canAttack) {
			document.removeEventListener('click', attack)
			return
		}
		document.addEventListener('click', e => attack(e), { once: true })
	}, [attack, canAttack])

	useEffect(() => {
		document.addEventListener('mousemove', e => {
			const posY = e.pageY - 6
			const posX = e.pageX - 50

			const posXattack = posX + 50

			if (cursorRef?.current == null) return

			cursorRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posX + 'px;')
			if (isAttacking) {
				attackRef?.current?.setAttribute('style', 'top: ' + posY + 'px; left: ' + posXattack + 'px;')
			}
		}),
			{ once: true }
	}, [isAttacking])

	const cursorContainerProps = {
		cursorIcon: cursor,
		ref: cursorRef,
		isAttacking: cursor !== 'images/swords/0.webp' ? isAttacking.toString() : 'false',
	}

	const attackAreaProps = {
		isAttacking: cursor !== 'images/swords/0.webp' ? isAttacking.toString() : 'false',
		ref: attackRef,
	}

	return (
		<Fragment>
			<S.CursorContainer {...cursorContainerProps} />
			<S.AttackArea {...attackAreaProps} />
		</Fragment>
	)
}
