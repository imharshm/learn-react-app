import React from 'react'

const Table = ({tableHeader}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    {tableHeader.map(header => (
                        <React.Fragment key={header.id}>
                        <th>{header.name}</th>
                        </React.Fragment>
                    ))}
                </tr>
      
            </thead>
            <tbody>
            {/* {myList.map((item, i) => {
                <tr key={i} onClick={toggleMobileOpen.bind(this, i)}>
                <td className="toggler">
                    {item.mobile_open && <ArrowUp />}
                    {!item.mobile_open && <ArrowDown />}
                </td>
                <td>{item.elem_one}</td>
                <td>{item.elem_two}</td>
                <td>{item.elem_three}</td>
                </tr>
            })} */}
            </tbody>
        </table>
    )
}

export default Table
