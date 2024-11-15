import './UserForm.css';

type Props = {
  data: {
    name: string,
    email: string,
  },
  updateFieldHandler: (key: string, value: string) => void,
}

const UserForm = (props: Props) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Tell us your name..."
          value={props.data.name || ""}
          onChange={(e) => props.updateFieldHandler("name", e.target.value)}
          required
        />
      </div>

      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Tell us your e-mail..."
          value={props.data.email || ""}
          onChange={(e) => props.updateFieldHandler("email", e.target.value)}
          required
        />
      </div>
    </div>
  )
}

export default UserForm;