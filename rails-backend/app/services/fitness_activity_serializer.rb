class FitnessActivitySerializer

    def initialize(fa_obj)
        @fa = fa_obj
    end

    def to_serialized_json
        options = {
            except: [:created_at, :updated_at]
        }
        @fa.to_json(options)
    end

end