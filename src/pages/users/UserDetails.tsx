import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../../app/services/users";
import NavBar from "../../components/navigation/NavBar";
import UserDetailsForm from "../account/UserDetailsForm";

const Userdetails = () => {
  const { id } = useParams();
  const userId = id as string;
  const { data: user, isLoading } = useGetUserByIdQuery(userId);
  return (
    <div>
      <div className="main-content">
        <NavBar />
        <div className="container-fluid mt--7">
          <div className="row">
            {/* profile card */}
            <div className="col-xl-4 order-xl-1 mb-5 mb-xl-0">
              <div className="card shadow p-md-5 p-3">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2 d-flex flex-column">
                    <div className="card-profile-image">
                      <img
                        src={`${user?.data.avatar}`}
                        className="rounded-circle w-100"
                        alt="profile"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-body pt-3 pt-md-4">
                  <div className="text-center">
                    <h3 className="text-uppercase fs-5">{`${user?.data.first_name} ${user?.data.last_name}`}</h3>
                    <div className=" font-weight-300">{user?.data.email}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-2">
              <div className="card shadow p-md-5 py-3">
                <div className="card-body">
                  {/* form */}
                  {user && <UserDetailsForm user={user} id={userId} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Userdetails;
