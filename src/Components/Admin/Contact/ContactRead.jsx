import React, { useEffect, useState } from "react";
import BreadCrumb from "../../CustomHooks/BreadCrumb";
import Sidebar from "../Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteContact,
  getContact,
} from "../../../Store/ActionCreators/ContactActionCreator";
export default function ContactRead() {
  let [data, setData] = useState({});
  let { id } = useParams();
  let dispatch = useDispatch();
  let ContactStateData = useSelector((state) => state.ContactStateData);
  let navigate = useNavigate();

  function getAPIData() {
    dispatch(getContact());
    if (ContactStateData) setData(ContactStateData.find((x) => x.id === id));
  }
  function deleteItem(id) {
    if (window.confirm("Are you sure you want to delete It"))
      dispatch(deleteContact({ id: id }));
    navigate("/admin/contactus");

    getAPIData();
  }
  console.log(data);
  useEffect(() => {
    getAPIData();
  }, [ContactStateData.length]);
  return (
    <>
      <BreadCrumb title="Contact" />
      <div className="flex justify-around flex-wrap flex-auto font-display">
        <div className="p-3 w-[370px]">
          <Sidebar />
        </div>
        <div className="flex flex-col p-2 min-w-[75%]">
          <div>
            <h2 className="bg-yellow-600 p-2 rounded-xl text-center border-r-2 font-bold text-xl text-white">
              All Contact
            </h2>
          </div>
          <div className="my-2">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="overflow-hidden">
                    <div className="flex-row flex flex-wrap justify-around my-2">
                      <div className="min-w-[45%]">
                        <label className="pl-1 font-bold">Name</label>
                        <input
                          className="w-full border py-2 px-2 rounded-xl mt-1"
                          name="name"
                          value={data.name}
                          disabled
                        />
                      </div>
                      <div className="min-w-[45%]">
                        <label className="pl-1 font-bold">Email</label>
                        <input
                          className="w-full border py-2 px-2 rounded-xl mt-1"
                          name="phone"
                          disabled
                          value={data.email}
                        />
                      </div>
                    </div>
                    <div className="flex-row flex flex-wrap justify-around my-2">
                      <div className="min-w-[45%]">
                        <label className="pl-1 font-bold">Desgination</label>
                        <input
                          className="w-full border py-2 px-2 rounded-xl mt-1"
                          name="name"
                          value={data.desg}
                          disabled
                        />
                      </div>
                      <div className="min-w-[45%]">
                        <label className="pl-1 font-bold">Date</label>
                        <input
                          className="w-full border py-2 px-2 rounded-xl mt-1"
                          name="phone"
                          disabled
                          value={data.date}
                        />
                      </div>
                    </div>

                    <div className="flex-row flex justify-evenly my-2">
                      <div className="w-[80%]">
                        <label className="pl-1 font-bold">Message</label>
                        <textarea
                          className="w-full border py-2 px-2 rounded-xl mt-1"
                          disabled
                          value={data.message}
                          rows={4}
                        ></textarea>
                      </div>
                    </div>

                    <div className="flex-row flex justify-evenly my-2">
                      <div className="w-full">
                        <button
                          className="py-2 bg-red-600 text-white w-full rounded-2xl font-semibold"
                          onClick={() => {
                            deleteItem(data.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
