'use client';
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { TabPanel, TabView } from 'primereact/tabview';
import React, { useEffect, useState } from 'react';
import { User } from '../../../types/user';
import UsersService from '../../../services/UserServices';

const UserDetails = () => {

const [user, setUser] = useState<User>();

useEffect(() => {
    UsersService.getUsers().then(res => setUser);
}, []);

    return (
        <div className="grid" id="user">
            <div className="col-12 justify-content-center">
                <Card>
                    <div className="flex justify-content-center">
                        <Avatar className="p-overlay-badge" icon="pi pi-user" size="xlarge">
                        {/* <img id="img-avatar" src={user?.avatar} alt="avatar"/> */}
                        </Avatar>
                        <TabView className="mt-8">
                            <TabPanel header="Usuario" >
                                <h5 id="name-user">{user?.username}</h5>
                                
                                <div id="info" className="grid w-full justify-content-center">
                                    <div className="col-6">Nombre: <span>{user?.firstname} </span></div>
                                    <div className="col-6">Apellido: <span>{user?.lastname} </span></div>
                                    <div className="col-6">Correo: <span>{user?.email}</span></div>
                                    <div className="col-6">Fecha de nacimiento: <span>{user?.birthdate}</span></div>
                                </div>
                            </TabPanel>
                        </TabView>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default UserDetails;
