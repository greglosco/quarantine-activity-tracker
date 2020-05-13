class HobbySerializer

    def initialize(hobby)
        @hobby = hobby
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @hobby.to_json(options)
    end

end