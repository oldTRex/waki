import React from "react";
import Axios from "axios";
import { toast } from "react-toastify";

import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import Card from "reactstrap/lib/Card";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import Input from "reactstrap/lib/Input";
import Label from "reactstrap/lib/Label";
import FormGroup from "reactstrap/lib/FormGroup";
import LaddaButton from "components/laddaButton/LaddaButton";
import CardFooter from "reactstrap/lib/CardFooter";

import { PulseLoader } from "react-spinners";
import LoadingOverlay from 'react-loading-overlay';

const EditRole = props => {
    const [chosenRoles, setChosenRoles] = React.useState([]);
    const [roles, setRoles] = React.useState([]);
    const [title, setTitle] = React.useState('');

    const [loading, setLoading] = React.useState(false);
    const [loadingOverlay, setOverlayLoading] = React.useState(false);

    React.useEffect(() => {
        // get the roles
        setOverlayLoading(true);

        Axios.get('roles')
            .then(({ data }) => {
                console.log('roles', data);
                setRoles(data.roles)
            }).catch(
                () => {
                    toast.error('مشکلی در ارتباط با سرور وجود دارد');
                }
            )

        // Axios.get('roles' + slug)
        // .then(({ data }) => {
        //     console.log('roles', data);
        //     // set the initital chosen one
        // }).catch(
        //     () => {
        //         toast.error('مشکلی در ارتباط با سرور وجود دارد');
        //     }
        // )
        // .finally(() => {
        // setOverlayLoading(true);
        // })

        setOverlayLoading(false);

    }, [])

    const handleMultipleChange = function (e) {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(Number(options[i].value));
            }
        }
        setChosenRoles(value);

    }

    const handleTitleChange = function (e) {
        setTitle(e.target.value);
    }

    const handleEditRole = function (e) {
        e.preventDefault();
        setLoading(true);
        console.log('roles', chosenRoles)
        console.log('title', title)

        // do some req then turn off loading
        setLoading(false);
    }

    return (
        <LoadingOverlay
            active={loadingOverlay}
            spinner={<div className="w-100 d-flex justify-content-center align-items-center"><PulseLoader color="gray" /></div>}
            styles={{
                overlay: base => ({
                    ...base,
                    background: "rgba(255,255,255,0.5)"
                })
            }}
        >
            <Card className="w-100">
                <CardHeader>ویرایش دسترسی</CardHeader>
                <CardBody>


                    <Row>
                        <Col xs="12" >
                            <FormGroup className="w-50">
                                <Label>عنوان</Label>
                                <Input type="text" name="title" onChange={handleTitleChange} placeholder="عنوان را وارد کنید" value={title} />
                            </FormGroup>
                        </Col>
                        <Col xs="12" className="mt-5" >
                            <FormGroup className="w-50">
                                <Label>دسترسی ها را وارد کنید</Label>
                                <Input type="select" name="roles" multiple onChange={handleMultipleChange}>
                                    {roles.length ? roles.map((role, i) => (
                                        <option selected={chosenRoles.includes(role.id)} key={'roles' + i} value={role.id}>{role.name}</option>
                                    )) : <option className='text-center ltr'>loading...</option>}
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                </CardBody>

                <CardFooter>
                    <LaddaButton loading={loading} color="primary" onClick={handleEditRole}>ویرایش</LaddaButton>
                </CardFooter>
            </Card>
        </LoadingOverlay>
    )
}

export default EditRole;