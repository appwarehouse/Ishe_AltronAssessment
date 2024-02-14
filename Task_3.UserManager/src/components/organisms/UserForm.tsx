import { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { v4 as uuid } from "uuid";
import { getUser } from "../../services/userService";

interface Props {
  isEdit: boolean;
  userId: string;
  initialUser?: DbUser;
  onSave: (user: DbUser) => void;
  onEdit: (user: DbUser) => void;
  onCancel: () => void;
}

const UserForm: React.FC<Props> = ({
  isEdit,
  userId,
  initialUser,
  onSave,
  onCancel,
  onEdit,
}) => {
  const defaultUser = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    userId: uuid(),
    isActive: true,
  };
  const [user, setUser] = useState<DbUser>(defaultUser);

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser]);

  useEffect(() => {
    const getUserData = async () => {
      const result = await getUser(userId);
      if (result) {
        setUser(result);
      }
    };

    if (isEdit) {
      //getUserData();
      if (initialUser) {
        setUser(initialUser);
      }
    } else {
      setUser(defaultUser);
    }
  }, [isEdit, userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(user);
  };

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit(user);
  };

  return (
    <>
      <p>Register/Create or Edit an existing user.</p>
      <Form onSubmit={initialUser ? handleEdit : handleSubmit}>
        <FormGroup floating>
          <Input
            id="exampleFirstName"
            name="firstName"
            placeholder="First Name"
            type="text"
            value={user.firstName}
            onChange={handleChange}
          />
          <Label for="exampleFirstName">First Name</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="exampleLastName"
            name="lastName"
            placeholder="Last Name"
            type="text"
            value={user.lastName}
            onChange={handleChange}
          />
          <Label for="exampleLastName">Last Name</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="exampleUsername"
            name="username"
            placeholder="Username"
            type="text"
            value={user.username}
            onChange={handleChange}
          />
          <Label for="exampleUsername">Username</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          <Label for="exampleEmail">Email</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={handleChange}
          />
          <Label for="examplePassword">Password</Label>
        </FormGroup>
        <Button color="primary" type="submit">
          Submit
        </Button>{" "}
        <Button color="danger" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </>
  );
};

export default UserForm;
