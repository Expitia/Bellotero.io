import React from 'react'

const Calculator = ({
  title,
  fullTime,
  spending,
  footCost,
  description,
  annualSaving,
  onChangeSpending,
  onChangeFullTime,
}: IProps) => {
  return (
    <div className="calculator container">
      <div className="row">
        <div className="calculator-side-left col-sm-12 col-md-5">
          <div className="bellotero-title">{title}</div>
          <div className="calculator-description mt-5 ">{description}</div>
        </div>
        <div className="calculator-side-right col-sm-12 col-md-6 offset-md-1">
          <Slider
            minRange={10}
            maxRange={100}
            valuePrefix="$"
            value={spending}
            label="Monthly ingredient spending"
            onChange={value => onChangeSpending(value)}
            valueToDisplay={annualSaving.toLocaleString('de-DE')}
          />
          <Slider
            minRange={1}
            maxRange={10}
            value={fullTime}
            onChange={value => onChangeFullTime(value)}
            label="Full-time employees that process invoices"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between justify-content-md-end ">
        <Sumary
          className="mr-3"
          value={footCost.toFixed(2)}
          label={'Estimated cost food savings'}
        />
        <Sumary
          label={'Your estimated annual savings'}
          value={annualSaving.toLocaleString('de-DE')}
        />
      </div>
    </div>
  )
}

const Slider = ({
  label,
  value,
  minRange,
  maxRange,
  onChange,
  valuePrefix,
  valueToDisplay,
}: ISlider) => {
  React.useEffect(() => {
    onChange(maxRange / 2)
  }, [maxRange])

  const style = {
    '--value': (value - minRange) / ((maxRange - minRange) / 100),
  } as React.CSSProperties

  return (
    <div className="calculator-slider d-flex flex-column mb-5">
      <div className="d-flex align-items-center justify-content-between">
        <div className="calculator-slider-label">{label}</div>
        <div className="calculator-slider-value">
          <div className="d-flex float-right w-auto">
            <small>{valuePrefix}</small>
            <span>{valueToDisplay || value}</span>
          </div>
        </div>
      </div>
      <div>
        <input
          style={style}
          value={value}
          min={minRange}
          max={maxRange}
          type={'range'}
          className="my-4"
          onChange={ev => onChange(Number(ev.target.value))}
        />
      </div>
    </div>
  )
}

const Sumary = ({ value, label, className }: ISumary) => (
  <div className={`calculator-sumary text-right ${className}`}>
    <div className="calculator-sumary-values">
      <small>$</small>
      <span>{value}</span>
    </div>
    <div className="calculator-sumary-label">{label}</div>
  </div>
)

interface ISumary {
  value: string
  label: string
  className?: string
}

interface ISlider {
  label: string
  value: number
  minRange: number
  maxRange: number
  valuePrefix?: string
  valueToDisplay?: string | number
  onChange: (value: number) => void
}

type IProps = IPropsCalculator & IPropsActions

export interface IPropsCalculator {
  title: string
  footCost: number
  fullTime: number
  spending: number
  description: string
  annualSaving: number
}

export interface IPropsActions {
  onChangeSpending: (value: number) => void
  onChangeFullTime: (value: number) => void
}

export default Calculator
