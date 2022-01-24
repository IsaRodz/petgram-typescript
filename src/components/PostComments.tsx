import {
  Box,
  HStack,
  Image,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
  Stack,
  Text
} from '@chakra-ui/react';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Comment, DataResponse } from '../interfaces';
import axios from '../providers/axios';

interface Props {
  postId: string;
}

interface Response extends AxiosResponse {
  data: DataResponse;
}

export default function PostComments({ postId }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/post/${postId}/comment`)
      .then(({ data }: Response) => {
        setComments(data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner size="xl" />;

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Stack spacing={3}>
            {comments.length ? (
              comments.map((comment) => (
                <Box key={comment.id}>
                  <HStack>
                    <Image
                      src={comment.owner.picture}
                      width="36px"
                      borderRadius="50%"
                    />
                    <Text fontWeight="bold">
                      {comment.owner.firstName} {comment.owner.lastName}
                    </Text>
                  </HStack>
                  <Text>{comment.message}</Text>
                </Box>
              ))
            ) : (
              <Text>Be the first to comment</Text>
            )}
          </Stack>
        </ModalBody>
      </ModalContent>
    </>
  );
}
