import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import AppContent from "../../commons/BodyContext/AppContent";
import AddCourse from "./AddCourse";
import { useStore } from "../../../stores/store";

export default observer(function AdminDash() {
  const [newCorse, setNewCorse] = useState(false);
  const [contactsMode, setContactsMode] = useState(false);
  const {
    userStore: { user },
    contactStore: { contacts, getting, getContacts },
  } = useStore();
  return (
    <AppContent>
      <div className="flex flex-col justify-center items-center text-2xl min-h-[90vh] gap-2">
        {!newCorse && !contactsMode && (
          <>
            <h1 className="text-4xl font-bold text-green-400 text-center">
              Hello. This Is Your Profile!
            </h1>
            <p className="text-4xl font-bold">
              Whats Up{" "}
              <span className="text-primary-color">{user?.displayName}</span>?
            </p>
            <button
              onClick={() => setNewCorse(true)}
              className="ring-1 ring-primary-color px-2 py-1 rounded my-2 
          hover:bg-primary-light hover:text-black transition-all"
            >
              Create New Course?
            </button>
            <button
              onClick={() => getContacts().then(() => setContactsMode(true))}
              className="ring-1 ring-primary-color px-2 py-1 rounded my-2 
          hover:bg-primary-light hover:text-black transition-all"
            >
              {getting ? "Loading Contacts..." : "Load Contacts"}
            </button>
          </>
        )}
        {newCorse && (
          <>
            <AddCourse />
            <button
              onClick={() => setNewCorse(false)}
              className="ring-1 ring-primary-color px-2 py-1 rounded my-2 
          hover:bg-primary-light hover:text-black transition-all"
            >
              Back
            </button>
          </>
        )}
        {contactsMode && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className="bg-gray-300 dark:bg-gray-400 text-black dark:text-white p-2 grid gap-2 rounded self-start"
                >
                  <p className="p-2">{contact.subject.toUpperCase()}</p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <p className="bg-gray-50 text-black text-sm rounded p-2">
                      {contact.name}
                    </p>
                    <p className="bg-gray-50 text-black text-sm rounded p-2">
                      {contact.email}
                    </p>
                  </div>
                  <p className="bg-gray-50 text-black text-sm rounded p-2">
                    {contact.message}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setContactsMode(false)}
              className="ring-1 ring-primary-color px-2 py-1 rounded my-2 
          hover:bg-primary-light hover:text-black transition-all"
            >
              Back
            </button>
          </>
        )}
      </div>
    </AppContent>
  );
});
