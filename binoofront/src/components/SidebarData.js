import React from 'react';

import { BiAddToQueue } from 'react-icons/bi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { IoReceiptSharp } from 'react-icons/io5';
import { GiSoap } from 'react-icons/gi';
import { RiAdminFill, RiEditLine } from 'react-icons/ri';

export const SidebarData = [
	{
		title: 'Adim Info',
		path: '#',
		icon: <RiAdminFill />,
	},
	{
		title: 'Product',
		path: '#',
		icon: <GiSoap />,
		iconClosed: <IoMdArrowDropdown />,
		iconOpened: <IoMdArrowDropup />,

		subNav: [
			{
				title: 'Create Product',
				path: '/create/product',
				icon: <BiAddToQueue />,
			},
			{
				title: 'Edit Product',
				path: '/admin/product',
				icon: <RiEditLine />,
			},
		],
	},
	{
		title: 'Orders',
		path: '/admin/orders',
		icon: <IoReceiptSharp />,
	},
];
