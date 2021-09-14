import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';
import { useStudents } from 'hooks/useStudents';

const StudentsList = ({ handleOpenStuedentDetails }) => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudentsByGroup } = useStudents({ groupId: id });

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(id);
      setStudents(students);
    })();
  }, [getStudentsByGroup, id]);

  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <StudentsListItem onClick={() => handleOpenStuedentDetails(userData.id)} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

export default StudentsList;
