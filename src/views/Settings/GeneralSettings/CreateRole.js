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

const CreateRole = props => {
    const [chosenRoles, setChosenRoles] = React.useState([]);
    const [roles, setRoles] = React.useState([]);
    const [title, setTitle] = React.useState('');

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        // get the roles

        Axios.get('roles')
            .then(({ data }) => {
                console.log('roles', data);
                setRoles(data.roles)
            }).catch(
                () => {
                    toast.error('مشکلی در ارتباط با سرور وجود دارد');
                }
            )
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

    const handleCreateRole = function (e) {
        e.preventDefault();
        setLoading(true);
        console.log('roles', chosenRoles)
        console.log('title', title)

        // do some req then turn off loading
        setLoading(false);
    }

    return (
        <Card className="w-100">
            <CardHeader>ایجاد دسترسی</CardHeader>
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
                                    <option key={'roles' + i} value={role.id}>{role.name}</option>
                                )) : <option className='text-center ltr'>loading...</option>}
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
            </CardBody>

            <CardFooter>
                <LaddaButton loading={loading} color="success" onClick={handleCreateRole}>ایجاد</LaddaButton>
            </CardFooter>
        </Card>
    )
}

export default CreateRole;