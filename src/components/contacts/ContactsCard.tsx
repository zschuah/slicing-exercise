import { ContactType } from "../../hooks/useFetchContacts";

type PropTypes = {
  contact: ContactType;
};

const ContactsCard = ({ contact }: PropTypes) => {
  return (
    <div className="flex bg-white border-b-8 border-gray-400 p-4">
      <img
        src={contact.image}
        alt={contact.name}
        className="w-20 h-20 object-cover"
      />

      <div className="ml-4">
        <p className="font-bold">{contact.name}</p>
        <p className="text-sm text-blue-500 underline">{contact.email}</p>
        <p className="text-sm text-blue-500 underline">{contact.mobile}</p>
        <p className="text-sm">{contact.home}</p>
        <p className="text-sm">{contact.country}</p>
      </div>
    </div>
  );
};

export default ContactsCard;
