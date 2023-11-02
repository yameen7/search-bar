import React from 'react';
import styles from './table.module.css';

const UserTable = ({ users }) => {
    return (
        <table className={styles.userTable}>
            <thead>
                <tr>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>Mobile</th>
                    <th>City</th>
                    {/* <th>Active</th> */}
                </tr>
            </thead>
            <tbody>
                {users?.map((user,index) => (
                    <tr key={index}>
                        <td>{user.fname}</td>
                        <td>{user.lname}</td>
                        <td>{user.mobile}</td>
                        <td>{user.city}</td>
                        {/* <td>{user.active.toString()}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable