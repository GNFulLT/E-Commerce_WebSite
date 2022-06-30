import React from 'react';
import { TextInput, TextInputProps, ActionIcon, useMantineTheme } from '@mantine/core';
import { Search, ArrowRight } from 'tabler-icons-react';
import { useMediaQuery } from '@mantine/hooks';

export default function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();
  const query = useMediaQuery("(min-width: 1024px)");
  const query2 = useMediaQuery("(min-width: 768px)");

  let width = "120px";
  if(query2)
  {
    width = "350px";
  }
  if(query)
  {
    width= "500px";
  }
  return (
    <TextInput
      styles={{wrapper:{
        width:`${width}`
      },}}
      icon={<Search size={query ? 18 : 10} />}
      size={query ? "md" : "xs"}
      rightSection={
        <ActionIcon size={query ? 28 : 15} radius="xl" color={theme.primaryColor} variant="filled">
          <ArrowRight size={query ? 16 : 10} />
        </ActionIcon>
      }
      placeholder="Search Products"
      rightSectionWidth={query ? 42 : 20}
      {...props}
    />
  );
}