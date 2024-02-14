import { ChangeEvent, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ResponsiveTable, { ColumnType } from "./components/organisms/Table";
import { Column } from "./interfaces/Column";
import {
  allUsers,
  deleteUser,
  updateUser,
  createUser,
} from "./services/sampleDataService";
import {
  Button,
  Col,
  Container,
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

  const handleUserDelete = async (value: any) => {
    const updatedUsers = await deleteUser(value, users);

    setUsers(updatedUsers);
  };

  const handleUserEditSelection = (value: any) => {
    setIsEdit(true);
    toggle();
    var userToEdit = users.find((x) => x.userId === value);
    setSelectedUser(userToEdit);
  };

  const handleUserEdit = async (user: DbUser) => {
    toggle();
    const updatedUsers = await updateUser(user, users);
    setUsers(updatedUsers);
  };

  const handleUserCreation = async (user: DbUser) => {
    toggle();
    const updatedUsers = await createUser(user, users);
    setUsers(updatedUsers);
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
    const fetchData = async () => {
      try {
        const data = await allUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Col lg="6">
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
    </Container>
  );
}

export default App;
