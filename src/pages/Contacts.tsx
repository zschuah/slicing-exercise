import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import axios from "axios";
import ContactsCard from "../components/ContactsCard";

export type Contact = {
  image: string;
  name: string;
  email: string;
  mobile: string;
  home: string;
};

const Contacts = () => {
  const [contactList, setContactList] = useState<Contact[]>([]);
  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = ({ selected }: { selected: number }) => {
    console.log(selected);
    const newOffset = (selected * itemsPerPage) % contactList.length;
    setItemOffset(newOffset);
  };

  const handleFetchContacts = async () => {
    const res = await axios.get("https://randomuser.me/api/?results=100");
    const newContacts = res.data.results.map((result: any) => {
      return {
        image: result?.picture?.large,
        name: `${result?.name?.first} ${result?.name?.last}`,
        email: result?.email,
        mobile: result?.cell,
        home: `${result?.location?.street?.number} ${result?.location?.street?.name}`,
      };
    });
    setContactList(newContacts);
  };

  useEffect(() => {
    handleFetchContacts();
  }, []);

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex">
          <h1 className="text-4xl">
            My <span className="font-bold">Contacts</span>
          </h1>
          <div className="border-b-4 border-black flex-1 ml-2"></div>
        </div>

        <select name="" id="">
          <option value="">Male</option>
          <option value="">Female</option>
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 my-8">
          {contactList
            .slice(itemOffset, itemOffset + itemsPerPage)
            .map((contact) => (
              <ContactsCard key={contact.email} contact={contact} />
            ))}
        </div>

        <ReactPaginate
          pageCount={Math.ceil(contactList.length / itemsPerPage)}
          onPageChange={handlePageClick}
          className="flex items-center justify-center"
          pageClassName="p-2 underline"
          activeClassName="font-bold no-underline"
          previousLabel={<FaChevronLeft />}
          nextLabel={<FaChevronRight />}
          disabledClassName="opacity-20"
        />
      </section>
    </div>
  );
};

export default Contacts;
