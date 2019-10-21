import { push } from 'connected-react-router'
import { from } from 'rxjs'
import { distinctUntilChanged, filter } from 'rxjs/operators'
import * as Actions from '../actions/index'
import { Views } from '../domain/models'
import { getCalculatorInfo, getOptions, getReviews } from '../domain/services'
import { StoreType } from '../reducers/store'

export const showDefaultOption = (store: StoreType) =>
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, current) =>
          prev.views.defaultOption === current.views.defaultOption,
      ),
      filter(state => !!state.views.defaultOption),
    )
    .subscribe(
      state =>
        state.views.defaultOption &&
        store.dispatch(push(state.views.defaultOption.route)),
    )

export const listenForOptions = (store: StoreType) =>
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, current) => prev.initialize === current.initialize,
      ),
      filter(state => state.initialize === true),
    )
    .subscribe(async state =>
      store.dispatch(Actions.LoadMenuInformation(await getOptions())),
    )

export const listenViewsForReviews = (store: StoreType) =>
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, current) => prev.router.location === current.router.location,
      ),
      filter(state => state.router.location.pathname === Views.REVIEWS),
    )
    .subscribe(async state =>
      store.dispatch(Actions.LoadReviewsInformation(await getReviews())),
    )

export const listenViewsForCalculator = (store: StoreType) =>
  from(store)
    .pipe(
      distinctUntilChanged(
        (prev, current) => prev.router.location === current.router.location,
      ),
      filter(state => state.router.location.pathname === Views.CALCULATOR),
    )
    .subscribe(async state =>
      store.dispatch(
        Actions.LoadCalculatorInformation(await getCalculatorInfo()),
      ),
    )

export const addSideEffectsToStore = (store: StoreType) => {
  listenForOptions(store)
  showDefaultOption(store)
  listenViewsForReviews(store)
  listenViewsForCalculator(store)
}
