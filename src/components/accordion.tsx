import { type ReactNode } from 'react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import {
  Accordion as ChakraAccordion,
  type AccordionProps as ChakraAccordionProps,
  AccordionButton,
  type AccordionButtonProps as ChakraAccordionButtonProps,
  AccordionItem,
  type AccordionItemProps as ChakraAccordionItemProps,
  AccordionPanel,
  type AccordionPanelProps as ChakraAccordionPanelProps,
  Box,
} from '@chakra-ui/react';

type DefaultStyleItemType = {
  fontSize: string;
  height: string;
  iconSize: string;
};

type DefaultStylesTypes = {
  small: DefaultStyleItemType;
  medium: DefaultStyleItemType;
  large: DefaultStyleItemType;
};

const DefaultStyles: DefaultStylesTypes = {
  small: {
    fontSize: 'sm',
    height: '11.25',
    iconSize: '11.25',
  },
  medium: {
    fontSize: 'base',
    height: '14',
    iconSize: '11.25',
  },
  large: {
    fontSize: 'lg',
    height: '15.5',
    iconSize: '11.25',
  },
};

interface ItemProps extends AccordionItemProps {
  defaultOpen: boolean;
}

export interface AccordionProps {
  accordionButtonProps?: ChakraAccordionButtonProps;
  accordionItemProps?: ChakraAccordionItemProps;
  accordionPanelProps?: ChakraAccordionPanelProps;
  accordionProps?: ChakraAccordionProps;
  items: ItemProps[];
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  size?: AccordionSize;
}

export type AccordionItemProps = {
  label: string;
  content?: ReactNode;
  isDisabled?: boolean;
  id: string;
};

export type AccordionSize = 'small' | 'medium' | 'large';

export const Accordion = ({
  accordionButtonProps,
  accordionItemProps,
  accordionPanelProps,
  accordionProps,
  items = [],
  showLeftIcon = false,
  showRightIcon = true,
  size = 'medium',
}: AccordionProps) => {
  if (!items || items.length === 0) {
    return null;
  }

  const defaultIndex = items.reduce(
    (arr: number[], item, idx) => (item.defaultOpen ? [...arr, idx] : arr),
    []
  );

  const renderLeftIcon = (isExpanded: boolean, fontSize: string) => {
    const IconToRender = isExpanded ? CloseIcon : AddIcon;
    return (
      <IconToRender
        fontSize={fontSize}
        mr={4}
      />
    );
  };

  const renderRightIcon = (isExpanded: boolean, fontSize: string) => {
    const IconToRender = isExpanded ? CloseIcon : AddIcon;
    return <IconToRender fontSize={fontSize} />;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <ChakraAccordion
        allowToggle
        width="100%"
        marginTop={0}
        defaultIndex={defaultIndex}
        {...accordionProps}
      >
        {items.map((item) => {
          return (
            <AccordionItem
              isDisabled={item?.isDisabled ?? false}
              key={item?.id}
              {...accordionItemProps}
            >
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      height={DefaultStyles[size].height}
                      {...accordionButtonProps}
                    >
                      {showLeftIcon &&
                        renderLeftIcon(
                          isExpanded,
                          DefaultStyles[size].iconSize
                        )}
                      <Box
                        flex="1"
                        textAlign="left"
                        textStyle={'Desktop/Default'}
                      >
                        {item?.label ?? ''}
                      </Box>
                      {showRightIcon &&
                        renderRightIcon(
                          isExpanded,
                          DefaultStyles[size].iconSize
                        )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    textStyle={'Desktop/Body-S'}
                    {...accordionPanelProps}
                  >
                    {item?.content ?? ''}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          );
        })}
      </ChakraAccordion>
    </Box>
  );
};
