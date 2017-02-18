package demo;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TopicService {

	public List<Topic> getAllTopics() {
		
		List<Topic> topics = new ArrayList<>( Arrays.asList(
			new Topic("1","Spring Core","Core desc"),
			new Topic("2","Spring Boot","Boot desc"),
			new Topic("3","Spring Mvc","Mvc desc")
		));
		
		return topics;
		
	}
		
}
