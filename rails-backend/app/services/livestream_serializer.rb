class LivestreamSerializer

    def initialize(livestream)
        @livestream = livestream
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @livestream.to_json(options)
    end

end