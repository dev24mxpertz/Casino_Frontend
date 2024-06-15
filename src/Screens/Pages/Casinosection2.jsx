import React, { useEffect, useState } from 'react';
import { Radio } from 'antd';
import AvatarImage from '../../Assets/Image/testimonialjpg.webp'; // Import Avatar Image

function Casinosection2() {
    const [filter, setFilter] = useState('all');
    const [employees, setEmployees] = useState([]);

    const simulatedData = [
        {
            id: 1,
            Game: 'Slot',
            Time: '19:04:22',
            User: 'User1',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 2,
            Game: 'Roulette',
            Time: '19:04:22',
            User: 'User2',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 3,
            Game: 'Blackjack',
            Time: '19:04:22',
            User: 'User3',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 4,
            Game: 'Slot',
            Time: '19:04:22',
            User: 'User4',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 5,
            Game: 'Roulette',
            Time: '19:04:22',
            User: 'User5',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 6,
            Game: 'Blackjack',
            Time: '19:04:22',
            User: 'User6',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 7,
            Game: 'Slot',
            Time: '19:04:22',
            User: 'User7',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 8,
            Game: 'Roulette',
            Time: '19:04:22',
            User: 'User8',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 9,
            Game: 'Blackjack',
            Time: '19:04:22',
            User: 'User9',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 10,
            Game: 'Slot',
            Time: '19:04:22',
            User: 'User10',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 11,
            Game: 'Roulette',
            Time: '19:04:22',
            User: 'User11',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        },
        {
            id: 12,
            Game: 'Blackjack',
            Time: '19:04:22',
            User: 'User12',
            Avatar: AvatarImage, // Add avatar URL
            BetAmount: '$1.26',
            Multiplier: 'x5.000',
            Pay: '$4.45'
        }
    ];

    useEffect(() => {
        document.getElementById(filter).classList.add('active');
        filterData(filter);
    }, [filter]);

    const handleFilterChange = (filterValue) => {
        setFilter(filterValue);
    };

    const filterData = (filter) => {
        if (filter === 'all') {
            setEmployees(simulatedData);
        } else {
            const filteredEmployees = simulatedData.filter(employee => employee.Game.toLowerCase() === filter.toLowerCase());
            setEmployees(filteredEmployees);
        }
    };

    return (
        <>
            <div className='Casinosection2'>
                <div className="d-flex justify-content-center w-100">
                    <Radio.Group defaultValue="all" buttonStyle="solid" className="filter-btns">
                        <div className="row w-100">
                            <div className='casino-radio-group col-md-4 col-12'>
                                <Radio.Button value="all" id="all" style={{ maxWidth: '200px', height: '55px', borderInlineStart: 'none', display: 'flex' }} className={`casino-mobile-btn blue-btn ${filter === 'all' ? 'radio-active' : ''}`} onClick={() => handleFilterChange('all')}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='radio-icon' src={require('../../Assets/Icon/All-bet-logo.png')} alt="" />
                                        <h6 className='radio-test' >All bets</h6>
                                    </div>
                                </Radio.Button>
                            </div>
                            <div className='casino-radio-group col-md-4 col-12'>
                                <Radio.Button value="Slot" id="Slot" style={{ maxWidth: '200px', height: '55px', borderInlineStart: 'none', display: 'flex' }} className={`casino-mobile-btn blue-btn ${filter === 'Slot' ? 'radio-active' : ''}`} onClick={() => handleFilterChange('Slot')} >
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='radio-icon' src={require('../../Assets/Icon/Big-bet-logo.png')} alt="" />
                                        <h6 className='radio-test' >Big bets</h6>
                                    </div>
                                </Radio.Button>
                            </div>
                            <div className='casino-radio-group col-md-4 col-12'>
                                <Radio.Button value="Roulette" id="Roulette" style={{ maxWidth: '200px', height: '55px', borderInlineStart: 'none', display: 'flex' }} className={`casino-mobile-btn blue-btn ${filter === 'Roulette' ? 'radio-active' : ''}`} onClick={() => handleFilterChange('Roulette')}>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img className='radio-icon' src={require('../../Assets/Icon/card-logo.png')} alt="" />
                                        <h6 className='radio-test' >Rare victories</h6>
                                    </div>
                                </Radio.Button>
                            </div>
                        </div>
                    </Radio.Group>
                </div>
                <div style={{ margin: '30px' }}>
                    <div className='employee-table table-container'>
                        <center>
                            <table className='gfg table-responsive'>
                                <thead>
                                    <tr>
                                        <th>Game</th>
                                        <th>Time</th>
                                        <th>User</th>
                                        <th>Bet Amount</th>
                                        <th>Multiplier</th>
                                        <th>Pay</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee.id}>
                                            <td>
                                                <div className='d-flex align-items-center gap-1 mb-1' style={{ marginLeft: '50px' }}>
                                                    <div>
                                                        <img className='table-icon' src={require('../../Assets/Icon/slot-machine.png')} alt="" />
                                                    </div>
                                                    <div>
                                                        {employee.Game}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{employee.Time}</td>
                                            <td>
                                                <div className='d-flex align-items-center gap-1 mb-1' style={{ marginLeft: '50px' }}>
                                                    <div>
                                                        <img src={employee.Avatar} alt="avatar" style={{ borderRadius: '50%' }} className='table-icon' />
                                                    </div>
                                                    <div>
                                                        {employee.User}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='d-flex align-items-center gap-1 mb-1' style={{ marginLeft: '50px' }}>
                                                    <div>
                                                        <img className='table-icon' src={require('../../Assets/Icon/cryptocurrency-color_usdt.png')} alt="" />
                                                    </div>
                                                    <div>
                                                        {employee.BetAmount}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{employee.Multiplier}</td>
                                            <td>
                                                <div className='d-flex align-items-center gap-1 mb-1' style={{ marginLeft: '50px' }}>
                                                    <div>
                                                        <img className='table-icon' src={require('../../Assets/Icon/cryptocurrency-color_usdt.png')} alt="" />
                                                    </div>
                                                    <div>
                                                        {employee.Pay}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </center>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Casinosection2;
