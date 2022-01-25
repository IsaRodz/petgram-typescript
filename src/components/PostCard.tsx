import {
  Box,
  HStack,
  Text,
  Image,
  Button,
  Flex,
  useColorModeValue,
  ButtonGroup,
  Modal
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaComment, FaHeart } from 'react-icons/fa';
import { Post } from '../interfaces';
import PostComments from './PostComments';

interface Props {
  post: Post;
}

function PostCard(props: Props) {
  const { post } = props;
  const background = useColorModeValue('white', 'gray.800');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box background={background} borderRadius="lg" boxShadow="md">
        <Box paddingX="4" paddingY="3">
          <HStack mb="1">
            <Image src={post.owner.picture} width="8" borderRadius="50%" />
            <Text fontWeight="bold">
              {post.owner.firstName} {post.owner.lastName}
            </Text>
          </HStack>
          <Text>{post.text}</Text>
          <Flex wrap="wrap" gap="1">
            {post.tags.map((tag) => (
              <Text key={tag} color="blue.400">
                #{tag}
              </Text>
            ))}
          </Flex>
        </Box>
        <Image src={post.image} />
        <HStack paddingX="4" paddingY="2" justifyContent="space-between">
          <HStack>
            <Text opacity={0.5}>{post.likes} liked this</Text>
          </HStack>
          <ButtonGroup>
            <Button leftIcon={<FaHeart />} variant="ghost" colorScheme="twitter">
              Like
            </Button>
            <Button
              leftIcon={<FaComment />}
              variant="ghost"
              colorScheme="twitter"
              onClick={() => [setIsOpen(true)]}
            >
              Comment
            </Button>
          </ButtonGroup>
        </HStack>
      </Box>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PostComments postId={post.id} />
      </Modal>
    </>
  );
}

export default PostCard;
