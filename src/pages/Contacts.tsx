import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import ContactsGrid from "../components/ContactsGrid";

export type Contact = {
  image: string;
  name: string;
  email: string;
  mobile: string;
  home: string;
  gender: string;
  country: string;
};

const Contacts = () => {
  const { data, isLoading, error } = useQuery<Contact[], Error>({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get("https://randomuser.me/api/?results=100");
      const formattedContacts = res.data.results.map((result: any) => {
        return {
          image: result?.picture?.large,
          name: `${result?.name?.first} ${result?.name?.last}`,
          email: result?.email,
          mobile: result?.cell,
          home: `${result?.location?.street?.number} ${result?.location?.street?.name}`,
          gender: result?.gender,
          country: result?.location?.country,
        };
      });
      return formattedContacts;
    },
  });

  const contactList = data || [];
  const countryList = [
    ...new Set(contactList.map((contact) => contact.country)),
  ].sort();

  const itemsPerPage = 9;
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const [filterGender, setFilterGender] = useState("");
  const [filterCountry, setFilterCountry] = useState("");

  const filteredContactList = contactList
    .filter((contact) => {
      if (filterGender) {
        return contact.gender === filterGender;
      }
      return contact;
    })
    .filter((contact) => {
      if (filterCountry) {
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
    if (filterGender || filterCountry) {
      handlePageClick({ selected: 0 });
    }
  }, [filterGender, filterCountry]);

  return (
    <div className="h-screen bg-bubbles--blue overflow-auto">
      <section className="mt-20 max-w-7xl mx-auto px-4">
        <div className="flex">
          <h1 className="text-4xl">
            My <span className="font-bold">Contacts</span>
          </h1>
          <div className="border-b-4 border-black flex-1 ml-2"></div>
        </div>

        <select
          value={filterGender}
          onChange={(e) => setFilterGender(e.target.value)}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          value={filterCountry}
          onChange={(e) => setFilterCountry(e.target.value)}
        >
          <option value="">Country</option>
          {countryList.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <ContactsGrid
          filteredContactList={filteredContactList}
          itemOffset={itemOffset}
          itemsPerPage={itemsPerPage}
        />

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
      </section>
    </div>
  );
};

export default Contacts;
