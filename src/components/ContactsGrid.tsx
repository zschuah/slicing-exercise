import { Contact } from "../pages/Contacts";
import ContactsCard from "./ContactsCard";

type PropTypes = {
  filteredContactList: Contact[];
  itemOffset: number;
  itemsPerPage: number;
};

const ContactsGrid = ({
  filteredContactList,
  itemOffset,
  itemsPerPage,
}: PropTypes) => {
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
