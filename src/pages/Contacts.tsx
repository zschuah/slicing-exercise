import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import ContactsFilter from "../components/contacts/ContactsFilter";
import ContactsGrid from "../components/contacts/ContactsGrid";
import useFetchContacts from "../hooks/useFetchContacts";

const Contacts = () => {
  const { data, isLoading, isError } = useFetchContacts();
  const contactList = data || [];
  const countryList = [
    //Removes dulpicate countries
    ...new Set(contactList.map((contact) => contact.country)),
  ].sort();

  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [filterGender, setFilterGender] = useState("");
  const [filterCountry, setFilterCountry] = useState("");

  const filteredContactList = contactList
    .filter((contact) => {
      if (filterGender && filterGender !== "all") {
        return contact.gender === filterGender;
      }
      return contact;
    })
    .filter((contact) => {
      if (filterCountry && filterCountry !== "all") {
        return contact.country === filterCountry;
      }
      return contact;
    });

  const handlePageClick = ({ selected }: { selected: number }) => {
    const newOffset = (selected * itemsPerPage) % filteredContactList.length;
    setItemOffset(newOffset);
    setCurrentPage(selected);
  };

  useEffect(() => {
    //Goes back to Page 1 whenever a new filter is selected
    if (filterGender || filterCountry) {
      handlePageClick({ selected: 0 });
    }
  }, [filterGender, filterCountry]);

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex">
          <h2 className="text-4xl">
            My <span className="font-bold">Contacts</span>
          </h2>
          <div className="border-b-4 border-black flex-1 ml-2"></div>
        </div>

        <ContactsFilter
          filterGender={filterGender}
          setFilterGender={setFilterGender}
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}
          countryList={countryList}
          isLoading={isLoading}
          isError={isError}
        />

        <ContactsGrid
          filteredContactList={filteredContactList}
          itemOffset={itemOffset}
          itemsPerPage={itemsPerPage}
          isLoading={isLoading}
          isError={isError}
        />

        {filteredContactList.length > 0 && (
          <ReactPaginate
            pageCount={Math.ceil(filteredContactList.length / itemsPerPage)}
            onPageChange={handlePageClick}
            forcePage={currentPage}
            className="flex items-center justify-center"
            pageClassName="p-2 underline"
            activeClassName="font-bold no-underline"
            previousLabel={<FaChevronLeft />}
            nextLabel={<FaChevronRight />}
            disabledClassName="opacity-20"
          />
        )}
      </section>
    </div>
  );
};

export default Contacts;
