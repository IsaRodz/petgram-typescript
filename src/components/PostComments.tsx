import { useCallback, useEffect, useState } from 'react';
import {
  Box,
  Button,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react';
import { Comment } from '../interfaces';
import { IoMdSend } from 'react-icons/io';
import api from '../providers/api';

interface Props {
  postId: string;
}

export default function PostComments({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  const getComments = useCallback(async () => {
    setLoading(true);
    const { data } = await api.getCommentsByPost(postId);
    setComments(data);
    setLoading(false);
  }, []);

  useEffect(() => {
    getComments();
  }, [postId]);

  const renderList = () => {
    if (loading)
      return (
        <Stack alignItems="center" py={10}>
          <Spinner size="xl" thickness="5px" />
        </Stack>
      );

    return (
      <>
        <Text fontWeight="bold" fontSize="lg" mb={5}>
          Comments
        </Text>
        <Stack spacing={6}>
          {comments.length ? (
            comments.map((comment) => (
              <Box key={comment.id}>
                <HStack alignItems="start">
                  <Image src={comment.owner.picture} width="6" borderRadius="50%" />
                  <Box>
                    <Text fontWeight="bold">
                      {comment.owner.firstName} {comment.owner.lastName}
                    </Text>
                    <Text>{comment.message}</Text>
                  </Box>
                </HStack>
              </Box>
            ))
          ) : (
            <Text textAlign="center" opacity="0.5">
              Be the first to comment
            </Text>
          )}
          <InputGroup>
            <Input placeholder="Write a comment" />
            <InputRightElement>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => {
                  alert('holo');
                }}
              >
                <IoMdSend />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </>
    );
  };

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalBody py={5}>{renderList()}</ModalBody>
      </ModalContent>
    </>
  );
}
