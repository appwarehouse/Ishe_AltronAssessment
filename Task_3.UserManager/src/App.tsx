import { ChangeEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ResponsiveTable, { ColumnType } from "./components/organisms/Table";
import { dummyUsers } from "./services/sampleDataService";
import { Column } from "./interfaces/Column";
import { deleteUser, updateUser } from "./services/userService";
import {
  Button,
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import UserForm from "./components/organisms/UserForm";

function App() {
  const [users, setUsers] = useState<DbUser[]>([]);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState<DbUser | undefined>();

  const toggle = () => {
    setModal(!modal);
  };

  const handleUserDelete = (value: any) => {
    const updatedUsers = users?.map((user) => {
      if (user.userId === value) {
        return { ...user, isActive: false };
      }
      return user;
    });

    setUsers(updatedUsers);
  };

  const handleUserEditSelection = (value: any) => {
    setIsEdit(true);
    toggle();
    var userToEdit = users.find((x) => x.userId === value);
    setSelectedUser(userToEdit);
  };

  const handleUserEdit = (user: DbUser) => {
    toggle();
    const index = users.findIndex((u) => u.userId === user.userId);
    const updatedUsers = [...users];
    updatedUsers[index] = user;
    setUsers(updatedUsers);
  };

  const handleUserCreation = (user: DbUser) => {
    toggle();
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const columns: Column[] = [
    { label: "User ID", key: "userId" }, // Defaults to Text
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Username", key: "username" },
    { label: "Email", key: "email" },
    { label: "Password", key: "password" },
    { label: "Active", key: "isActive", type: ColumnType.Checkbox },
    {
      label: "Edit",
      key: "userId",
      type: ColumnType.Button,
      onClick: handleUserEditSelection,
    },
    {
      label: "Delete",
      key: "userId",
      type: ColumnType.Button,
      onClick: handleUserDelete,
    },
  ];

  useEffect(() => {
    setUsers(dummyUsers);
  }, []);

  return (
    <div className="App">
      <Row>
        <Col md="3">
          <Button
            block
            color="success"
            onClick={() => {
              setSelectedUser(undefined);
              setIsEdit(false);
              toggle();
            }}
          >
            Create User
          </Button>
        </Col>
      </Row>
      <ResponsiveTable data={users} columns={columns} />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          {isEdit ? "Create User" : "Edit User"}
        </ModalHeader>
        <ModalBody>
          <UserForm
            isEdit
            userId=""
            onCancel={toggle}
            onSave={handleUserCreation}
            initialUser={selectedUser}
            onEdit={handleUserEdit}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default App;
