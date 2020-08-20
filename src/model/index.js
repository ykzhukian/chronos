import Room from './Room'

export const rooms = [
	{id: 'wembleymeeting',	name: '温布利',	location: '丰树城6楼',	size: 10},
	{id: 'olympicmeeting',	name: '奥林匹克',	location: '丰树城6楼',	size: 30},
	{id: 'bernabeumeeting',	name: '伯纳乌',	location: '丰树城6楼',	size: 8},
	{id: 'hongguanmeeting',	name: '红馆',	location: '丰树城5楼',	size: 8},
	{id: 'niaochaomeeting',	name: '鸟巢',	location: '丰树城6楼',	size: 12},
	{id: 'noucampmeeting',	name: '诺坎普',	location: '丰树城6楼',	size: 8},
	{id: 'shushanmeeting',	name: '书山',	location: '丰树城6楼',	size: 50},
	{id: 'shuilifangmeeting',	name: '水立方',	location: '丰树城6楼',	size: 16},
	{id: 'wujimeeting',	name: '无忌',	location: '丰树城6楼',	size: 30},
	{id: 'wukesongmeeting',	name: '五棵松',	location: '丰树城5楼',	size: 20},
	{id: 'xiaojudanmeeting',	name: '小巨蛋',	location: '丰树城5楼',	size: 8},
	{id: 'zhengnianmeeting',	name: '正念',	location: '丰树城6楼',	size: 10},
].map(info => new Room(info))

export function roomDistance(a, b) {
	return Math.abs(a.location - b.location)
}
