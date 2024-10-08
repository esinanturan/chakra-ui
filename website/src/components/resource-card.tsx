import {
  Badge,
  BoxProps,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from '@chakra-ui/react'

export interface Resource {
  heading: string
  type: 'blog' | 'talk' | 'video'
  description: string
  url: string
  author: string
  tags?: string[]
}

interface ResourceCardProps extends BoxProps {
  data: Resource
}

function ResourceCard(props: ResourceCardProps) {
  const { data, ...rest } = props
  const { heading, author, description, url, tags } = data

  return (
    <LinkBox
      {...rest}
      p={4}
      rounded='lg'
      transitionProperty='all'
      transitionDuration='slower'
      transitionTimingFunction='ease-out'
      bg='gray.50'
      _dark={{ bg: 'gray.700' }}
      _hover={{
        transform: 'scale(1.025)',
        boxShadow: 'var(--chakra-shadows-md)',
      }}
    >
      <VStack gap={2} align='stretch'>
        <Flex
          wrap='wrap'
          className='algolia-exclude'
          gap='3'
          mb='2'
          align='center'
        >
          {tags?.map((tag, index) => (
            <Badge
              key={index}
              as='a'
              rel='tag'
              color='teal.600'
              _dark={{ color: 'teal.400' }}
              textTransform='uppercase'
              fontSize='xs'
              fontWeight='bold'
              whiteSpace='break-spaces'
            >
              {tag}
            </Badge>
          ))}
        </Flex>

        <LinkOverlay target='_blank' rel='noopener' href={url}>
          <VStack gap={2} align='stretch'>
            <Heading as='h3' size='sm'>
              <span className='content'>{heading}</span>
            </Heading>
            <Text fontSize='sm' color='gray.500'>
              by {author}
            </Text>
            <Text lineHeight='tall' opacity={0.8}>
              {description}
            </Text>
          </VStack>
        </LinkOverlay>
      </VStack>
    </LinkBox>
  )
}

export default ResourceCard
