import React from 'react';

interface SuraNameProps {
  id?: string;
}

const SuraName: React.FC<SuraNameProps> = ({ id = '1' }) => <span>{id}</span>;

export default SuraName;
