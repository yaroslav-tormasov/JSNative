import React from 'react';
//import { connect, useDispatch } from 'react-redux';
import { connect, useSelector } from 'react-redux';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import { IGlobalState } from '../../redux/state';
import { CurrencyState } from '../../redux/currencyReducer';
import { compose, Dispatch } from 'redux';
import {
  ChangeActionAC,
  ChangeCurrencyFieldAC,
  changeCurrentCurrencyAC,
  CurrencyReducersTypes,
  useDispatch
} from '../../redux/actions';
import {
  selectAmountOfBYN,
  selectAmountOfCurrency,
  selectCurrencies, selectCurrencySate,
  selectCurrentCurrency,
  selectIsBuying,
} from '../../redux/selector';

interface ICurrencyProps extends CurrencyState {
  // setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void;
  // setAction: (isBuying: boolean) => void;
  // changeCurrency: (currency: string) => void;


  // ChangeCurrencyFieldAC: (amountOfBYN: string, amountOfCurrency: string) => void;
  // ChangeActionAC: (isBuying: boolean) => void;
  // changeCurrentCurrencyAC: (currency: string) => void;
}

// const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = ({
//   currencies,
//   currentCurrency,
//   isBuying,
//   amountOfBYN,
//   amountOfCurrency,
//   setCurrencyAmount,
//   setAction,
//   changeCurrency,
// }) => {

// const CurrencyEContainer: React.FunctionComponent<ICurrencyProps> = ({
//                                                                        currencies,
//                                                                        currentCurrency,
//                                                                        isBuying,
//                                                                        amountOfBYN,
//                                                                        amountOfCurrency,
//                                                                        ChangeCurrencyFieldAC,
//                                                                        ChangeActionAC,
//                                                                        changeCurrentCurrencyAC
//                                                                      }) => {

// const CurrencyEContainer: React.FunctionComponent<CurrencyState> = ({
//                                                                        currencies,
//                                                                        currentCurrency,
//                                                                        isBuying,
//                                                                        amountOfBYN,
//                                                                        amountOfCurrency,
//                                                                      }) => {
//   // const dispatch = useDispatch()
//   const dispatch = useDispatch();

const CurrencyEContainer: React.FunctionComponent = () => {
  // const dispatch = useDispatch()
  // const dispatch = useDispatch();
  // const currencies = useSelector(selectCurrencies);
  // const currentCurrency = useSelector(selectCurrentCurrency);
  // const isBuying = useSelector(selectIsBuying);
  // const amountOfBYN = useSelector(selectAmountOfBYN);
  // const amountOfCurrency = useSelector(selectAmountOfCurrency);

  const dispatch = useDispatch();
  const { currencies, currentCurrency, isBuying, amountOfBYN, amountOfCurrency} = useSelector(selectCurrencySate);



  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency) => {
    if (currency.currencyName === currentCurrency) {
      currencyRate = isBuying ? currency.buyRate : currency.sellRate;
    }
    return currency.currencyName;
  });

  const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    if (!isFinite(+value)) return;
    if (e.currentTarget.dataset.currency) {
      const trigger: string = e.currentTarget.dataset.currency;
      if (trigger === 'byn') {
        if (value === '') {
          // setCurrencyAmount(value, value);
          // ChangeCurrencyFieldAC(value, value);
          // dispatch(ChangeCurrencyFieldAC(value, value));
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          // setCurrencyAmount(value, (+( Number(value).toFixed(2) ) / currencyRate).toFixed(2));
          // ChangeCurrencyFieldAC(value, (+( Number(value).toFixed(2) ) / currencyRate).toFixed(2));
          // dispatch(ChangeCurrencyFieldAC(value, (+( Number(value).toFixed(2) ) / currencyRate).toFixed(2)));
          dispatch(ChangeCurrencyFieldAC(value, (+( Number(value).toFixed(2) ) / currencyRate).toFixed(2)));
        }
      } else {
        if (value === '') {
          // setCurrencyAmount(value, value);
          // ChangeCurrencyFieldAC(value, value);
          // dispatch(ChangeCurrencyFieldAC(value, value));
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
          // ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
          // dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
          dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
    // e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false);
    // e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
    e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
    // e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
    e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <React.Fragment>
      <CurrencyExchange
        currenciesName={currenciesName}
        currentCurrency={currentCurrency}
        currencyRate={currencyRate}
        isBuying={isBuying}
        amountOfBYN={amountOfBYN}
        amountOfCurrency={amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};

// const mapStateToProps = (state: IGlobalState) => {
//   return {
//     currencies: state.currency.currencies,
//     currentCurrency: state.currency.currentCurrency,
//     isBuying: state.currency.isBuying,
//     amountOfBYN: state.currency.amountOfBYN,
//     amountOfCurrency: state.currency.amountOfCurrency,
//   };
// };
// @ts-ignore
// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) => {
//   return {
//     setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//       dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//     },
//     setAction(isBuying: boolean) {
//       dispatch(ChangeActionAC(isBuying));
//     },
//     changeCurrency(currency: string) {
//       dispatch(changeCurrentCurrencyAC(currency));
//     },
//   };
// };
// @ts-ignore
//export const CurrencyExchangeContainer = compose(connect(mapStateToProps, mapDispatchToProps))(CurrencyEContainer);
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps, {
//   ChangeCurrencyFieldAC,
//   ChangeActionAC,
//   changeCurrentCurrencyAC
// } ))(CurrencyEContainer);
// export const CurrencyExchangeContainer = compose(connect(mapStateToProps,{}  ))(CurrencyEContainer);
export default CurrencyEContainer;
