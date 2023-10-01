'use client';
import { Avatar } from 'primereact/avatar';
import { Card } from 'primereact/card';
import { TabPanel, TabView } from 'primereact/tabview';
import { useEffect, useState } from 'react';
import { User } from '../../../types/user';
import UsersService from '../../../services/UserServices';

const UserDetails = () => {

    const [user, setUser] = useState<User[]>();

    useEffect(() => {
    UsersService.getUsers().then(setUser);
    }, []);

    return (
        <div className="grid" id="user">
            <div className="col-12 justify-content-center">
                { user?.map((user) => {
                        return (
                           <Card key={ user.id}>
                            <div className="flex justify-content-center">
                                <Avatar className="p-overlay-badge" size="xlarge">
                                 <img src={user?.avatar} alt="avatar"/>
                                </Avatar>
                                <TabView className="mt-8">
                                    <TabPanel header="Usuario" >
                                            <div id="info" className="grid w-full justify-content-center">
                                            <div className="col-6">Nombre: <span>{user?.firstname} </span></div>
                                            <div className="col-6">Apellido: <span>{user?.lastname} </span></div>
                                            <div className="col-6">Correo: <span>{user?.email}</span></div>
                                            <div className="col-6">Fecha de nacimiento: <span>{user?.birthdate.slice(0,10)}</span></div>
                                        </div>
                                    </TabPanel>
                                </TabView>
                            </div>
                        </Card>
                        )})
                }
                
            </div>
        </div>
    );
};

export default UserDetails;
