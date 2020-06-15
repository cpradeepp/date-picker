import React from 'react';
import {CalendarContainer, InputBox, SelectedText, DatePicker, ActionsRow, DaysRow, Day, DayHover, DateMonth} from './Calendar.styles';
import {UpDownIcon, LeftIcon, RightIcon} from './svg/Icons';
import ClickOutside from '../utils/ClickOutside';
import moment from 'moment';

class Calendar extends React.PureComponent<Props> {
	constructor(props) {
		super(props);

		const now = moment();
		const date = now.date();
		const month = now.format('MMMM');
		const year = now.format('YYYY');
		this.state = {
			calendarOpen: false,
			dateSelected: null,
			days: [],
			currentDate: date,
			currentMonth: month,
			currentYear: year
		};
	}

	toggleCalendar = () => {
		const {calendarOpen} = this.state;

		this.setState ({
			calendarOpen: !calendarOpen
		}, () => {
			if(this.state.calendarOpen) {
				this.getCurrentDate()
			}
		});
	};

	getCurrentDate = (arrowAction) => {
		const {dateSelected, currentDate, currentMonth, currentYear} = this.state;
		let daysThisMonth = ['M', 'T', 'W', 'T', 'F', 'S', 'S' ];
		const now = dateSelected && !arrowAction ? moment(dateSelected) : moment().set('date', currentDate).set('month', currentMonth).set('year', currentYear);
		const daysInMonth = now.daysInMonth();
		const date = now.date();
		const month = now.format('MMMM');
		const year = now.format('YYYY');
		let startOfMonth = now.startOf('month').day();

		while(startOfMonth > 1) {
			daysThisMonth.push('');
			startOfMonth--;
		}

		for(let i = 1; i <= daysInMonth; i++) {
			daysThisMonth.push(i);
		}

		this.setState({
			days: daysThisMonth,
			currentDate: date,
			currentMonth: month,
			currentYear: year
		});
	};

	selectDate = (day) => {
		const {currentMonth, currentYear} = this.state;
		const now = moment();
		now.date(day);
		now.month(currentMonth);
		now.year(currentYear);

		this.setState({
			dateSelected: now
		});
		this.toggleCalendar();
	};

	prevMonth = () => {
		const {currentMonth, currentYear} = this.state;
		const now = moment();
		now.month(currentMonth).subtract(1, 'months');
		const month = now.format('MMMM');
		let year = currentYear;

		if(now.month(currentMonth).format('M') == 1) {
			year--;
		}

		this.setState({
			currentMonth: month,
			currentYear: year
		}, () => {
			this.getCurrentDate(true);
		});
	};

	nextMonth = () => {
		const {currentMonth, currentYear} = this.state;
		const now = moment();
		now.month(currentMonth).add(1, 'months');
		const month = now.format('MMMM');
		let year = currentYear;

		if(now.month(currentMonth).format('M') == 12) {
			year++;
		}

		this.setState({
			currentMonth: month,
			currentYear: year
		}, () => {
			this.getCurrentDate(true);
		});
	};

	render() {
		const {dateSelected, calendarOpen, days, currentDate, currentMonth, currentYear} = this.state;
		const now = moment();
		const month = now.format('MMMM');
		const year = now.format('YYYY');
		const highlightCDate = month === currentMonth && year === currentYear;
		const highlightSelectedDate = dateSelected && dateSelected.format('MMMM') === currentMonth && dateSelected.format('YYYY') === currentYear;

		return(
			<CalendarContainer>
				<InputBox id="inputBox" onClick={(event)=>this.toggleCalendar(event)} ref={node => this.node = node}>
					<SelectedText dateSelected={dateSelected}>{dateSelected ? dateSelected.format('DD/MM/YYYY') : 'Please Select'}</SelectedText>
					<UpDownIcon/>
				</InputBox>
				{ calendarOpen ?
				  <DatePicker>
					  <ClickOutside toggle={this.toggleCalendar} ignoreClick={this.node}>
						  <ActionsRow>
							  <LeftIcon onClick={this.prevMonth}/>
							  <DateMonth>{currentMonth} {currentYear}</DateMonth>
							  <RightIcon onClick={this.nextMonth}/>
						  </ActionsRow>
						  <DaysRow>
							  {days.map((day, index) => (<Day key={day + index}>{
								  day ? <DayHover onClick={() => this.selectDate(day)}
								                  currentDate={highlightCDate && now.date() === day}
								                  selectedDate={highlightSelectedDate && currentDate === day}
								                  currDay={day}
								      >{day}</DayHover> : ''
							  }</Day>))}
						  </DaysRow>
					  </ClickOutside>
				  </DatePicker>
				  :
				  ''
				}
			</CalendarContainer>
		)
	}
};

export default Calendar