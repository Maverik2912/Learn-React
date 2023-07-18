import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import styles from './UsersForm.module.css';
import {usersFormValidator} from "../../../validator/usersFormValidator/usersFormValidator";
import {apiServices} from "../../../services/apiServices";
import {commentsFormValidator} from "../../../validator/commentsFormValidator/commentsFormValidator";
const UsersForm = () => {
    const {register: registerUsers, reset: resetUsers, handleSubmit: handleSubmitUsers, formState: {errors: errorsUsers}} = useForm({
        resolver: joiResolver(usersFormValidator)
    });

    const {register: registerComments, reset: resetComments, handleSubmit: handleSubmitComments, formState: {errors: errorsComments}} = useForm({
        resolver: joiResolver(commentsFormValidator)
    });

    const saveUsers = async (user) => {
        try{
            await apiServices.postUser(user).then(data => console.log(data));
            resetUsers();
        } catch (e) {
            console.log(e.message)
        }
    };

    const saveComments = async (comment) => {
        try{
            await apiServices.postComment(comment).then(data => console.log(data));
            resetComments();
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className={styles.formsContainer}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Create User</h2>
                <form className={styles.form} onSubmit={handleSubmitUsers(saveUsers)}>
                    <div>
                        <label htmlFor='name'> Name:</label>
                        <input id='name' type="text" {...registerUsers('name')} />
                        {errorsUsers.name && <span>{errorsUsers.name.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='username'> Username:</label>
                        <input id='username' type="text" {...registerUsers('username')} />
                        {errorsUsers.username && <span>{errorsUsers.username.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='email'> Email:</label>
                        <input id='email' type="email" {...registerUsers('email')} />
                        {errorsUsers.email && <span>{errorsUsers.email.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='city'> City:</label>
                        <input id='city' type="text" {...registerUsers('address.city')} />
                        {errorsUsers.address?.city && <span>{errorsUsers.address.city.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='suite'> Suite:</label>
                        <input id='suite' type="text" {...registerUsers('address.suite')} />
                        {errorsUsers.address?.suite && <span>{errorsUsers.address.suite.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='street'> Street:</label>
                        <input id='street' type="text" {...registerUsers('address.street')} />
                        {errorsUsers.address?.street && <span>{errorsUsers.address.street.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='zipcode'> Zip Code:</label>
                        <input id='zipcode' type="text" {...registerUsers('address.zipcode')} />
                        {errorsUsers.address?.zipcode && <span>{errorsUsers.address.zipcode.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='lat'> Lat:</label>
                        <input id='lat' type="number" {...registerUsers('address.geo.lat')} />
                        {errorsUsers.address?.geo?.lat && <span>{errorsUsers.address.geo.lat.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='lng'> Lng:</label>
                        <input id='lng' type="number" {...registerUsers('address.geo.lng')} />
                        {errorsUsers.address?.geo?.lng && <span>{errorsUsers.address.geo.lng.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='phone'> Phone:</label>
                        <input id='phone' type="phone" {...registerUsers('phone')} />
                        {errorsUsers.phone && <span>{errorsUsers.phone.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='website'> Website:</label>
                        <input id='website' type="text" {...registerUsers('website')} />
                        {errorsUsers.website && <span>{errorsUsers.website.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='companyName'> Company Name:</label>
                        <input id='companyName' type="text" {...registerUsers('company.name')} />
                        {errorsUsers.company?.name && <span>{errorsUsers.company.name.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='catchPhrase'> Catch phrase:</label>
                        <input id='catchPhrase' type="text" {...registerUsers('company.catchPhrase')} />
                        {errorsUsers.company?.catchPhrase && <span>{errorsUsers.company.catchPhrase.message}</span>}
                    </div>

                    <div>
                        <label htmlFor='bs'> Bs:</label>
                        <input id='bs' type="text" {...registerUsers('company.bs')} />
                        {errorsUsers.company?.bs && <span>{errorsUsers.company.bs.message}</span>}
                    </div>

                    <button className={styles.button}>Create User</button>
                </form>
            </div>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Create Comment</h2>
                <form onSubmit={handleSubmitComments(saveComments)} className={styles.form}>

                    <div>
                        <label htmlFor="postId">Post Id:</label>
                        <input type="number" id='postId' {...registerComments('postId')}/>
                        {errorsComments.postId && <span>{errorsComments.postId.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='postId' {...registerComments('name')}/>
                        {errorsComments.name && <span>{errorsComments.name.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' {...registerComments('email')}/>
                        {errorsComments.email && <span>{errorsComments.email.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="body"></label>
                        <input type="text" id='body' {...registerComments('body')}/>
                        {errorsComments.body && <span>{errorsComments.body.message}</span>}
                    </div>

                    <button className={styles.button}>Add comment</button>
                </form>
            </div>
        </div>

    );
};

export default UsersForm;