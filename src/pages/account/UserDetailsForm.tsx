import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SingleUser, useUpdateUserMutation } from "../../app/services/users";
import "./account.css";
interface IAccountFormInput {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
}
type Props = {
  user: SingleUser;
  id: string;
};

const UserDetailsForm = ({ user, id }: Props) => {
  const [disabled, setDisabled] = useState<boolean>(true);
  const [update, { isLoading, isSuccess, data: result }] =
    useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAccountFormInput>();

  const toggleDisabled = () => setDisabled(!disabled);

  useEffect(() => {
    reset({
      email: user?.data.email,
      username: `${user?.data.first_name}.${user?.data.last_name}`,
      firstName: user?.data.first_name,
      lastName: user?.data.last_name,
      jobTitle: user?.data.jobTitle || "Engineer",
    });
  }, [reset, user?.data]);

  useEffect(() => {
    if (result) {
      setDisabled(true);
    }
    console.log({ result });
  }, [result]);

  const onSubmit = async (data: IAccountFormInput) => {
    update({ ...data, id: id });
    //TODO: update redux slice with new data
  };
  return (
    <div>
      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="heading-small text-muted mb-4">User information</h6>
        <div className="pl-lg-4">
          <div className="row">
            <div className="col-lg-6  mb-3">
              <div className="form-group focused">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  {...register("username", {
                    // required: true,
                  })}
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  placeholder="lucky.jesse"
                  disabled={disabled}
                />
              </div>
            </div>
            <div className="col-lg-6  mb-3">
              <div className="form-group focused">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  {...register("email", {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  placeholder="ada@lovelace.co"
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  disabled={disabled}
                />
                {errors.email?.type === "pattern" && (
                  <p className="text-danger m-0">Email not valid</p>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-3">
              <div className="form-group focused">
                <label className="form-label" htmlFor="first-name">
                  First name
                </label>
                <input
                  {...register("firstName", {
                    // required: true,
                  })}
                  type="text"
                  id="first-name"
                  className="form-control"
                  placeholder="Lucky"
                  disabled={disabled}
                />
              </div>
            </div>
            <div className="col-lg-6  mb-3">
              <div className="form-group focused">
                <label className="form-label" htmlFor="last-name">
                  Last name
                </label>
                <input
                  {...register("lastName", {
                    // required: true,
                  })}
                  type="text"
                  id="last-name"
                  className="form-control form-control-alternative"
                  placeholder="Jesse"
                  disabled={disabled}
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6  mb-3">
              <div className="form-group focused">
                <label className="form-label" htmlFor="job-title">
                  Job title
                </label>
                <input
                  {...register("jobTitle", {
                    // required: true,
                  })}
                  type="text"
                  id="job-title"
                  className="form-control form-control-alternative"
                  placeholder="Engineer"
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        {/* Address */}
        <div className="col-4 text-right">
          {disabled ? (
            <button className="btn btn-primary" onClick={toggleDisabled}>
              Edit details
            </button>
          ) : (
            <div className="d-flex flex-row">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
              <button
                className="btn btn-info text-white mx-1"
                onClick={toggleDisabled}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserDetailsForm;
