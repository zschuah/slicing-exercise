import { Contact } from "../pages/Contacts";
import ContactsCard from "./ContactsCard";

type PropTypes = {
  filteredContactList: Contact[];
  itemOffset: number;
  itemsPerPage: number;
  isLoading: boolean;
};

const ContactsGrid = ({
  filteredContactList,
  itemOffset,
  itemsPerPage,
  isLoading,
}: PropTypes) => {
  if (isLoading) {
    return (
      <section className="my-8">
        <h2 className="text-center text-3xl">Loading...</h2>
      </section>
    );
  }

  if (filteredContactList.length === 0) {
    return (
      <section className="my-8">
        <h2 className="text-center text-2xl">
          No contact found under the filters. Please try a different filter.
        </h2>
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-8">
      {filteredContactList
        .slice(itemOffset, itemOffset + itemsPerPage)
        .map((contact) => {
          return <ContactsCard key={contact.email} contact={contact} />;
        })}
    </section>
  );
};

export default ContactsGrid;
