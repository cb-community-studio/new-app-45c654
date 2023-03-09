
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';


 
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const UserinfoCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            userID: _entity.userID,
            name: _entity.name,
            surname: _entity.surname,
            address: _entity.address,
            phone: _entity.phone,
            avatar: _entity.avatar

        };

        setLoading(true);
        try {
            const result = await client.service("userinfo").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="userinfo-create-dialog-component">
                <div>
                    <p className="m-0" >userID:</p>
                    <InputText type="number" className="w-full mb-3" value={_entity?.userID} onChange={(e) => setValByKey("userID", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >name:</p>
                    <InputText className="w-full mb-3" value={_entity?.name} onChange={(e) => setValByKey("name", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >surname:</p>
                    <InputText className="w-full mb-3" value={_entity?.surname} onChange={(e) => setValByKey("surname", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >address:</p>
                    <InputText className="w-full mb-3" value={_entity?.address} onChange={(e) => setValByKey("address", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >phoneNumber:</p>
                    <InputText className="w-full mb-3" value={_entity?.phone} onChange={(e) => setValByKey("phone", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >userAvatar:</p>
                    <InputText className="w-full mb-3" value={_entity?.avatar} onChange={(e) => setValByKey("avatar", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(UserinfoCreateDialogComponent);
// createDialog_code.template
